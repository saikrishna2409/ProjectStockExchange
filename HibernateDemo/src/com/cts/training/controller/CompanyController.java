package com.cts.training.controller;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.cts.training.model.Company;
import com.cts.training.model.StockExchange;

public class CompanyController {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure();
		
		SessionFactory sessionFactory = cfg.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		
//	Company company =new Company(102,"CTS1","Digital","Brains",454289823773.768);
//		session.save(company);
//		Company getCompany =session.get(Company.class, 102);
//		getCompany.setEnabled(true);
//		getCompany.setCeoName("Harsha");
		StockExchange se =new StockExchange(1,"BSE","Mumbai","Mutual");
		session.save(se);
	transaction.commit();
	session.close();
		
	}

}
