package com.kannawiki.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;

import com.kannawiki.entidades.Miembro;
import com.kannawiki.repository.MiembroRepository;
import com.kannawiki.service.MiembrosServicio;


public class MiembroServicioImpl implements MiembrosServicio {

	@Autowired
	private MiembroRepository miembrodb;
	
	@Override
	public void crearMiembro(Miembro miembro) {
		// TODO Auto-generated method stub
		miembrodb.save(miembro);
	}

	@Override
	public void editarMiembro(Miembro miembro) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void borrarMiembro(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Miembro devolverMiembro(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
