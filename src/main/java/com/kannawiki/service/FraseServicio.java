package com.kannawiki.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kannawiki.entidades.Frase;


public interface FraseServicio {

	public void crearFrase(Frase frase);
	public Frase devolverFrase(int id);
	public void editarFrase(Frase frase);
	public void borrarFrase(int id);
	public List<Frase> listadoFrases();
}
