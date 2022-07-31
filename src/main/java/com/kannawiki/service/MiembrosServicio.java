package com.kannawiki.service;

import org.springframework.stereotype.Service;

import com.kannawiki.model.Miembro;


public interface MiembrosServicio {

	public void crearMiembro(Miembro miembro);
	public void editarMiembro(Miembro miembro);
	public void borrarMiembro(int id);
	public Miembro devolverMiembro(Integer id);
	
}
