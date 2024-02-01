FROM node:19.2-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package*.json ./
COPY . ./
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci --silent
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:stable-alpine
#Set working folder
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
# Start nginx
CMD ["nginx", "-g", "daemon off;"]