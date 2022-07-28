package com.kannawiki.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;

import com.kannawiki.entidades.Frase;
import com.kannawiki.repository.FraseRepository;
import com.kannawiki.service.FraseServicio;

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

}
