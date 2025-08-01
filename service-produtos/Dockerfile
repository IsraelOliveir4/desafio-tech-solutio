# Use a imagem oficial do OpenJDK como base
FROM eclipse-temurin:17-jdk-jammy

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo JAR da aplicação para dentro do container
COPY target/*.jar app.jar

# Expõe a porta que sua aplicação vai rodar (ajuste se necessário)
EXPOSE 8080

# Comando para executar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
