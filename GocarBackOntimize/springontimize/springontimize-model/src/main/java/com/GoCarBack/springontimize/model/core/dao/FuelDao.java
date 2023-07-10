package com.GoCarBack.springontimize.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "FuelDao")
@ConfigurationFile(
        configurationFile = "dao/FuelDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class FuelDao extends OntimizeJdbcDaoSupport {



    public static final String ID = "fuel_id";
    public static final String BRAND = "fuel_name";
}
