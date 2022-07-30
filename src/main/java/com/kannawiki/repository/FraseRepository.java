package com.kannawiki.repository;

import org.springframework.stereotype.Repository;

import com.kannawiki.entidades.Frase;

import lombok.NonNull;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface FraseRepository extends JpaRepository<Frase,Integer>{
	
}
