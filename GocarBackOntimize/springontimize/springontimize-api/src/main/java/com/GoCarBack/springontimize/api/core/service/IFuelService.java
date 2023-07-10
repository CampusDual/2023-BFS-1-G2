package com.GoCarBack.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IFuelService {

    public EntityResult fuelQuery(Map<?, ?> keyMap, List<?> attrList);

}
