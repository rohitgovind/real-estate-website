provider "aws" {
  region = "ap-south-1" # Mumbai region
}

# Create a Key Pair
resource "aws_key_pair" "jenkins_key" {
  key_name   = "jenkins-key"
  public_key = file("~/.ssh/id_rsa.pub") # Ensure this file exists
}

# Create Security Group
resource "aws_security_group" "jenkins_sg" {
  name_prefix = "jenkins-sg-"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Jenkins"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "React App"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "jenkins_server" {
  ami           = "ami-052cef05d01020f1d" # Amazon Linux 2, verified
  instance_type = "t3.micro"               # ✅ Free Tier eligible for most new accounts
  key_name      = aws_key_pair.jenkins_key.key_name
  vpc_security_group_ids = [aws_security_group.jenkins_sg.id]

  tags = {
    Name = "Jenkins-Server"
  }
}

# Output the public IP of the Jenkins server
output "jenkins_public_ip" {
  value = aws_instance.jenkins_server.public_ip
  description = "Public IP of the Jenkins server"
}



