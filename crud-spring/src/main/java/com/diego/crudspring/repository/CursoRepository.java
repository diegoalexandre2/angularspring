package com.diego.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diego.crudspring.model.Cursos;

@Repository
public interface CursoRepository extends JpaRepository<Cursos, Long>{


    
}
