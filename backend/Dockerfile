FROM eclipse-temurin:17-jdk-alpine as build

WORKDIR /app

COPY pom.xml mvnw ./
COPY src ./src
COPY .mvn ./.mvn

RUN apk add --no-cache maven && ./mvnw package -DskipTests

FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]