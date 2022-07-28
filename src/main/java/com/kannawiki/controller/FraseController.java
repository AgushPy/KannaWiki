package com.kannawiki.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kannawiki.serviceImpl.FraseServicioImpl;

@RestController
@RequestMapping("/frase")
@CrossOrigin(origins = "http://localhost")
public class FraseController {
	@Autowired
	private FraseServicioImpl frasesvim;
}
