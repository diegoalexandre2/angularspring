package com.diego.crudspring.controller;


import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diego.crudspring.model.Cursos;
import com.diego.crudspring.repository.CursoRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursosControllre {
    
    
    private  final CursoRepository cursoRepository;


    @GetMapping
    public List<Cursos> list() {
        return cursoRepository.findAll();
    }


}
