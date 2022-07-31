package com.kannawiki.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kannawiki.model.Miembro;
import com.kannawiki.repository.MiembroRepository;
import com.kannawiki.service.MiembrosServicio;

@Service
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
		Miembro miembro = miembrodb.getById(id);
		return miembro;
	}

}
