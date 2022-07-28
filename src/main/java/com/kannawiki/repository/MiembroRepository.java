package com.kannawiki.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kannawiki.entidades.Miembro;

import lombok.NonNull;

@Repository @NonNull
public interface MiembroRepository extends JpaRepository<Miembro, Long>{

}
