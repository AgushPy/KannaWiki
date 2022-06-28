package com.kannawiki.serviceImpl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.kannawiki.entidades.Frase;
import com.kannawiki.repository.FraseRepository;
import com.kannawiki.service.FraseServicio;

public class FraseServicioImpl implements FraseServicio{

	private static final int id = 0;
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
	public List<Frase> listadoFrases(int id){
		List<Frase> frases = frasedb.findAll();
		List<Frase> frasesAEnviar = new ArrayList<>();
		for (Frase frase : frases) {
			Frase f = frase;
			if(f.getMiembro().getId() == id) {
				frasesAEnviar.add(f);
			}
		}
		return frasesAEnviar;
	}
	
	@Override
	public void borrarFrase(int id) {
		// TODO Auto-generated method stub
		
	}

}
