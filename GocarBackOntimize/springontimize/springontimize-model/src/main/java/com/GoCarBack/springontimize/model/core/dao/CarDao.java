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

    public static final String ID = "CAR_";
    public static final String BRAND = "BRAND";
    public static final String MODEL = "MODEL";
    public static final String STATUS = "STATUS";
    public static final String LOCALITATION = "LOCALITATION";


}
