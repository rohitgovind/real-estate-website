# Real Estate Website

A modern real estate website built with React and Node.js.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

- Automated testing
- Building
- Deployment

### Workflow Steps

1. **Build and Test**
   - Runs on every push and pull request
   - Installs dependencies
   - Runs tests
   - Creates production build

2. **Deploy**
   - Only runs on main branch
   - Deploys build to hosting platform

## Development Setup

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```

2. Install dependencies:
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Start development servers:
   ```bash
   # Start client (in client directory)
   npm start

   # Start server (in server directory)
   npm start
   ```

## Testing

Run tests with:
```bash
# In client directory
npm test

# Run tests without watch mode
npm test -- --watchAll=false
```

## Building

Create a production build:
```bash
# In client directory
npm run build
```

## Deployment

The project is automatically deployed when changes are pushed to the main branch.

## Environment Variables

Create `.env` files in both client and server directories:

```env
# client/.env
REACT_APP_API_URL=http://localhost:5000

# server/.env
PORT=5000
```