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

    public static final String ATTR_CAR_ = "CAR_";
    public static final String ATTR_BRAND = "BRAND";
    public static final String ATTR_MODEL = "MODEL";
    public static final String ATTR_STATUS = "STATUS";
    public static final String ATTR_LOCALITATION = "LOCALITATION";


}
