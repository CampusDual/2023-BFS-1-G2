package com.GoCarBack.springontimize.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "CarDao")
@ConfigurationFile(
	configurationFile = "dao/CarDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class CarDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "car_";
    public static final String BRAND = "brand";
    public static final String MODEL = "model";
    public static final String plate = "plate";
    public static final String LOCATION = "location";


}
