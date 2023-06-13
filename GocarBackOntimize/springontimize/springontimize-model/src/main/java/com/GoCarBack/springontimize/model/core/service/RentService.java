package com.GoCarBack.springontimize.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.GoCarBack.springontimize.api.core.service.IRentService;
import com.GoCarBack.springontimize.model.core.dao.RentDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("RentService")
public class RentService implements IRentService {

	@Autowired
	private RentDao rentDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;


	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult rentQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(rentDao, keyMap, attrList);
	}

	public EntityResult rentInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(rentDao, attrMap);
	}

	public EntityResult rentUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(rentDao, attrMap, keyMap);
	}

	public EntityResult rentDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.rentDao, keyMap);
	}

}
