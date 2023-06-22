package com.GoCarBack.springontimize.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.GoCarBack.springontimize.api.core.service.IRentService;
import com.GoCarBack.springontimize.model.core.dao.RentDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

import static com.GoCarBack.springontimize.model.core.service.CarService.formatDateDateRange;


@Lazy
@Service("RentService")
public class RentService implements IRentService {

	private static final String USER_RENT = "user_rent";
	@Autowired
	private RentDao rentDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;


	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult rentQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(rentDao, keyMap, attrList);
	}

	public EntityResult rentInsert(Map<String, Object> attrMap) {
		//We recover the id_user that is logged in, and we put it in the map to save it in the database
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		attrMap.put(USER_RENT, auth.getName());

		Map<String, Object> dateRangeMap = (Map<String, Object>) attrMap.get("daterange");
		String startDate= (String) dateRangeMap.get("startDate");
		String endDate= (String) dateRangeMap.get("endDate");

		attrMap.put("rental_start_date", formatDateDateRange(startDate));
		attrMap.put("rental_end_date", formatDateDateRange(endDate));

		return this.daoHelper.insert(rentDao, attrMap);
	}

	public EntityResult rentUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(rentDao, attrMap, keyMap);
	}

	public EntityResult rentDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.rentDao, keyMap);
	}

}
