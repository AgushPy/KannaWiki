package com.kannawiki.service;

import com.kannawiki.entidades.Miembro;

public interface MiembrosServicio {

	public void crearMiembro(Miembro miembro);
	public void editarMiembro(Miembro miembro);
	public void borrarMiembro(int id);
	public Miembro devolverMiembro(int id);
	
}
