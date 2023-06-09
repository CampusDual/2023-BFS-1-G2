package com.GoCarBack.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface ICarService {

	public EntityResult carQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult carInsert(Map<?, ?> attrMap);
	public EntityResult carUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult carDelete(Map<?, ?> keyMap);

	//public EntityResult myCarInsert(Map<?, ?> attrMap);


}
