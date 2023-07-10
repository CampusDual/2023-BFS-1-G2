package com.GoCarBack.springontimize.model.core.service;

import com.GoCarBack.springontimize.api.core.service.IFuelService;
import com.GoCarBack.springontimize.model.core.dao.FuelDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("FuelService")
public class FuelService implements IFuelService {
    @Autowired
    private FuelDao fuelDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Override
    public EntityResult fuelQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(fuelDao, keyMap, attrList);
    }
}
