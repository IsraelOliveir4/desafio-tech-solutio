package com.service_estoque;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ServiceEstoqueApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServiceEstoqueApplication.class, args);
	}

}
