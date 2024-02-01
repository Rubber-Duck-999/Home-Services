FROM maven:latest

WORKDIR /app
COPY . .
RUN mvn clean install
EXPOSE 5000
CMD mvn spring-boot:run