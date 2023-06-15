package com.GoCarBack.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IBrandService {

    public EntityResult brandQuery(Map<?, ?> keyMap, List<?> attrList);

}
