# Etapa 1: compila o projeto com Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia todos os arquivos do projeto para dentro do container
COPY . .

# Compila o projeto (sem rodar os testes)
RUN mvn clean package -DskipTests

# Etapa 2: usa uma imagem mais leve para rodar o JAR
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copia o JAR gerado na etapa anterior
COPY --from=builder /app/target/*.jar app.jar

# Expõe a porta que o Spring Boot usa
EXPOSE 8080

# Comando para rodar o app
ENTRYPOINT ["java", "-jar", "app.jar"]
