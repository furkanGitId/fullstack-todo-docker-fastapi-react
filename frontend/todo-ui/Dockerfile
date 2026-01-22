# Stage 1: Build the React/Vue/Angular app
FROM node:alpine AS build

WORKDIR /app

# Copy dependency files first to leverage Docker cache
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the source code
COPY . .

# Create the production build
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# FIX: The path must be /usr/share/nginx/html
# Also, ensure your build folder is actually named 'build' (Vite uses 'dist')
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]