package com.GoCarBack.springontimize.model.core.service;

import com.GoCarBack.springontimize.api.core.service.IBrandService;
import com.GoCarBack.springontimize.model.core.dao.BrandDao;
import com.GoCarBack.springontimize.model.core.dao.CarDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("BrandService")
public class BrandService implements IBrandService {
    @Autowired
    private BrandDao brandDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Override
    public EntityResult brandQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(brandDao, keyMap, attrList);
    }
}
