package com.kannawiki.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kannawiki.model.Frase;
import com.kannawiki.repository.FraseRepository;
import com.kannawiki.service.FraseServicio;
@Service
public class FraseServicioImpl implements FraseServicio{

	@Autowired
	private FraseRepository frasedb;
	
	@Override
	public void crearFrase(Frase frase) {
		// TODO Auto-generated method stub
		frasedb.save(frase);
	}

	@Override
	public Frase devolverFrase(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void editarFrase(Frase frase) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void borrarFrase(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Frase> listadoFrases() {
		// TODO Auto-generated method stub
		List<Frase> listado = frasedb.findAll();
		return listado;
	}

}
