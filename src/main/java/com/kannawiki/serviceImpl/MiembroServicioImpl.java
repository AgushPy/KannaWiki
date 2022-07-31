package com.kannawiki.serviceImpl;

import java.util.List;

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
	public Miembro devolverMiembro(Integer id) {
		// TODO Auto-generated method stub
		List<Miembro> miembros = miembrodb.findAll();
		for (Miembro miembro : miembros) {
			if(miembro.getId() == id) {
				return miembro;
			}
		}
		return null;
	}

}
