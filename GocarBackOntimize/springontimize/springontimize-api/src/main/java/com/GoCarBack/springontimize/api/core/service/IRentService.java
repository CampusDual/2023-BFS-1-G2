package com.GoCarBack.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IRentService {

	public EntityResult rentQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult rentInsert(Map<?, ?> attrMap);
	public EntityResult rentUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult rentDelete(Map<?, ?> keyMap);

}
