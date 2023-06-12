package com.GoCarBack.springontimize.model.core.service;



import com.GoCarBack.springontimize.api.core.service.ICarService;
import com.GoCarBack.springontimize.model.core.dao.CarDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("CarService")
public class CarService implements ICarService {

	private static final String PRIMARYUSERKEY = "user_id";
	@Autowired
	private CarDao carDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult carQuery(Map<?, ?> keyMap, List<?> attrList) {
		EntityResult result = this.daoHelper.query(carDao, keyMap, attrList);

		return result;
	}
	public EntityResult carInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(carDao, attrMap);
	}

	public EntityResult carUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(carDao, attrMap, keyMap);
	}

	public EntityResult carDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.carDao, keyMap);
	}

	@Override
	public EntityResult myCarInsert(Map<String, Object> attrMap) {
		//Recuperamos el id_user que esta logueado y lo metemos en el map para guardalo en la bbdd
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		attrMap.put(PRIMARYUSERKEY, auth.getName());
		return this.daoHelper.insert(carDao,attrMap);
	}

}
