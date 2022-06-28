package com.kannawiki.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kannawiki.entidades.Frase;
import com.kannawiki.entidades.Miembro;
import com.kannawiki.serviceImpl.FraseServicioImpl;
import com.kannawiki.serviceImpl.MiembroServicioImpl;

@RestController
@RequestMapping("/miembro")
@CrossOrigin(origins = "http://localhost")
public class MiembroController {
	//@Autowired

	@Autowired
	private MiembroServicioImpl miembrosvim;
	@Autowired
	private FraseServicioImpl frasesvim;
	//private MiembroServicioImpl miembrosvim;
	@GetMapping("/{id}")
	public Miembro devolverMiembro(@PathVariable(value = "id") int mimebroId){
		MiembroServicioImpl miembroBuscar = new MiembroServicioImpl();
		Miembro miembro= miembroBuscar.devolverMiembro(mimebroId);
		
		return miembro;
	}
	
	@PostMapping("/crear")
	public void crearMiembro(@RequestParam(value = "nameMiembro",defaultValue = "null") String nameMiembro,
			@RequestParam(value = "usuarioDs",defaultValue = "null") String usuarioDs,
			@RequestParam(value = "cumpleaniosFecha",defaultValue = "null")Date cumpleaniosFecha,
			@RequestParam(value = "descripcion",defaultValue = "null")String descripcion){
		List<Frase> frases = null;
		Miembro miembro = new Miembro();
		
	}
}
