package com.diego.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.diego.crudspring.model.Cursos;
import com.diego.crudspring.repository.CursoRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase( CursoRepository cursoRepository){

		return args ->{

			cursoRepository.deleteAll();

				Cursos c = new Cursos();
				c.setName("Angular com Srping Boot");
				c.setCategory("Front-End");

				cursoRepository.save(c);

		};

	}
}
