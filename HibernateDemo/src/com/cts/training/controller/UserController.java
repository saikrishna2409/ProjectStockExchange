package com.cts.training.controller;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.cts.training.model.User;

public class UserController {

	public static void main(String[] args) {
		
		Configuration cfg = new Configuration();
		cfg.configure();
		
		SessionFactory sessionFactory = cfg.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		
//		User user = new User(104, "abin", "abin@123", "abin@cts.com", 7623984L, true);
//		
//		session.save(user);
		//To fetch the records we will use get() method
		User getUser =session.get(User.class, 104);
//		getUser.setEnabled(true);
//		getUser.setPassword("12356");
//		session.update(getUser);
		//Delete the object/Record
		//session.delete(getUser);
		
		//To display all the classes
		List<User> users =session.createQuery("From User").list();
		users.forEach(System.out::println);
		transaction.commit();
		session.close();

	}

}
