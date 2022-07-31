package com.kannawiki.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kannawiki.model.Frase;
import com.kannawiki.model.Miembro;
import com.kannawiki.repository.FraseRepository;
import com.kannawiki.service.FraseServicio;
import com.kannawiki.service.MiembrosServicio;
import com.kannawiki.serviceImpl.FraseServicioImpl;
import com.kannawiki.serviceImpl.MiembroServicioImpl;

@RestController
@RequestMapping("/miembro")
@CrossOrigin(origins = "http://localhost:5500")
public class MiembroController {
	@Autowired
	private MiembrosServicio miembrosvim;
	@Autowired
	private FraseServicio frasesvim;
	
	@GetMapping("/{id}")
	public ResponseEntity<Miembro> devolverMiembro(@PathVariable(value = "id") int mimebroId){
		Miembro miembro= miembrosvim.devolverMiembro(mimebroId);
		
		return new ResponseEntity<Miembro>(miembro, HttpStatus.OK);
	}
	
	// @PostMapping("/crear")
	// public void crearMiembro(@RequestParam(value = "nameMiembro",defaultValue = "null") String nameMiembro,
	// 		@RequestParam(value = "usuarioDs",defaultValue = "null") String usuarioDs,
	// 		@RequestParam(value= "rango",defaultValue = "null") String rango,
	// 		@RequestParam(value = "cumpleaniosFecha",defaultValue = "null")Date cumpleaniosFecha,
	// 		@RequestParam(value = "descripcion",defaultValue = "null")String descripcion,
	// 		@RequestParam(value = "listadoFrase", defaultValue ="null") List<Frase> frases
	// 		){
	// 	Miembro miembro = new Miembro(nameMiembro,usuarioDs,rango,cumpleaniosFecha,descripcion,frases);
	// 	miembrosvim.crearMiembro(miembro);
	// }
	
	//esta segunda forma creo que es la correcta para compilar el codigo y entregarlo mediante una rest al sv
	@PostMapping("/crear")
	public ResponseEntity<String> crearMiembro(@RequestBody Miembro miembro){
		miembrosvim.crearMiembro(miembro);
		return new ResponseEntity("Creación correcta",HttpStatus.OK);
	}
}
