package com.kannawiki.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kannawiki.model.Miembro;

import lombok.NonNull;

@Repository
public interface MiembroRepository extends JpaRepository<Miembro, Integer>{

}
