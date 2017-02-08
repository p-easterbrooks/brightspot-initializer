# Brightspot Initialition
Creates a running local instance of Brightspot on your environment

## Local Environment Setup

### Provided Components
Download the initial files and then proceed to clone your project repository into brightspot-initalizer directory.
You may rename the brightspot-initializer directory to whatever you like.

### Minimum Requirements

Versions for the various components are listed below. An 'x' signifies that the latest point release version *should* be used but an older version is fine too. A '^' signifies that at least that point release version **MUST** be used but a later version is fine too.

* **Java 1.8.x** [[download](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)]
* **Apache 2.2.x** (optional)
* **Tomcat 8.x** [[download](http://tomcat.apache.org/download-80.cgi)]
* **MySQL 5.6.x** [[download](https://dev.mysql.com/downloads/mysql/5.6.html#downloads)]
* **Solr 4.8.1^** [[download](http://archive.apache.org/dist/lucene/solr/)]
* **DIMS 3.3.2^**

#### Java

[Java 8](http://en.wikipedia.org/wiki/Java_version_history#Java_8_updates) is required to build and deploy your app as there are Java 8 specific features being used in the source code.

You can check your installed Java version by running
```bash
java -version
```
If needed, you can download Java 8 [[here](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)].


#### Apache

Not necessary for local environment deployments.

### Tomcat

[Tomcat 8](http://tomcat.apache.org/whichversion.html) is required to successfully run the project as we are using new features of the Servlet/JSP/EL specs deployed with this version.

Download [Tomcat 8](http://tomcat.apache.org/download-80.cgi) and install it to a directory (e.g., `/usr/local/apache-tomcat`) now referred to as `${TOMCAT_HOME}`.

###### server.xml

Edit the `server.xml` file found in `${TOMCAT_HOME}/conf/` and make sure that the `URIEncoding` attribute is set to `UTF-8` so that special characters are always handled correctly in the browser.

```xml
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               URIEncoding="UTF-8" />
```

###### context.xml

Edit (or create) the `context.xml` file found in `${TOMCAT_HOME}/conf/` and replace its content with the snippet below.
This context assumes Tomcat is running on port **8080** and MySQL on port **3306**. 
At a minimum you will need to replace anything enclosed in **${ }** with your environment specific values.

```xml
<?xml version='1.0' encoding='utf-8'?>
<Context allowLinking="true" cachingAllowed="false">

    <!-- Default set of monitored resources -->
    <WatchedResource>WEB-INF/web.xml</WatchedResource>

    <Environment name="PRODUCTION" override="false" type="java.lang.Boolean" value="false" />
    <Environment name="SECRET"     override="false" type="java.lang.String"  value="a74d08ebab71e9eb10a1087f5c7a1263" />

    <Environment name="dari/debugUsername" override="false" type="java.lang.String" value="${DEBUG_USER}" />
    <Environment name="dari/debugPassword" override="false" type="java.lang.String" value="${DEBUG_PASS}" />

    <!-- CMS Settings -->
    <Environment name="cms/tool/isAutoCreateUser" override="false" type="java.lang.Boolean" value="true"  />

    <!-- Storage Item Settings  -->
    <Environment name="dari/defaultStorage"         override="false" type="java.lang.String" value="local" />

    <Environment name="dari/storage/local/class"    override="false" type="java.lang.String" value="com.psddev.dari.util.LocalStorageItem" />
    <Environment name="dari/storage/local/rootPath" override="false" type="java.lang.String" value="${TOMCAT_HOME}/webapps/media" />
    <Environment name="dari/storage/local/baseUrl"  override="false" type="java.lang.String" value="http://localhost:8080/media" />

    <!-- Database Settings -->
    <Environment name="dari/defaultDatabase" override="false" type="java.lang.String" value="${DB_NAME}" />

    <Environment name="dari/database/${DB_NAME}/class"              override="false" type="java.lang.String" value="com.psddev.dari.db.AggregateDatabase" />
    <Environment name="dari/database/${DB_NAME}/defaultDelegate"    override="false" type="java.lang.String" value="sql" />
    <Environment name="dari/database/${DB_NAME}/delegate/sql/class" override="false" type="java.lang.String" value="com.psddev.dari.db.SqlDatabase" />

    <Resource name="dari/database/${DB_NAME}/delegate/sql/dataSource"
        auth="Container"
        driverClassName="com.mysql.jdbc.Driver"
        logAbandoned="true"
        maxActive="100"
        maxIdle="30"
        maxWait="10000"
        type="javax.sql.DataSource"
        removeAbandoned="true"
        removeAbandonedTimeout="60"
        username="${DB_USER}"
        password="${DB_PASS}"
        url="jdbc:mysql://localhost:3306/${DB_NAME}"
        testOnBorrow="true"
        validationQuery="SELECT 1"
    />
    <Environment name="solr/home" override="false" type="java.lang.String" value="${TOMCAT_HOME}/solr" />
    <Environment name="dari/database/${DB_NAME}/delegate/solr/groups"    override="false" type="java.lang.String" value="-* +cms.content.searchable" />
    <Environment name="dari/database/${DB_NAME}/delegate/solr/class"     override="false" type="java.lang.String" value="com.psddev.dari.db.SolrDatabase" />
    <Environment name="dari/database/${DB_NAME}/delegate/solr/serverUrl" override="false" type="java.lang.String" value="http://localhost:8080/solr" />

</Context>
```
The new file will need to be configured. Replace the values outlined below with your own. Note, the snippet above is editable.

- **`${DB_NAME}`** - the name of the MySQL database you created (e.g., `playbill`).
- **`${DB_USER}`** - the username to login to your MySQL database.
- **`${DB_PASS}`** - the password to login to your MySQL database.
- **`${TOMCAT_HOME}`** - The directory where tomcat is installed (e.g., `/usr/local/apache-tomcat`).
- **`${TOMCAT_PORT}`** - The port at which tomcat will run (Defaults to **8080**. You can find this value in `${TOMCAT_HOME}/conf/server.xml` by looking for: `<Connector port=`).
- **`${DEBUG_USER}`** - specify the username for accessing `http://localhost:8080/_debug` here.
- **`${DEBUG_PASS}`** - specify the password for accessing `http://localhost:8080/_debug` here.


### MySQL

Download [MySQL 5.6.x](https://dev.mysql.com/downloads/mysql/5.6.html#downloads) and install it using the default installation for your platform (e.g., to `/usr/local/mysql`, now referred to as `${MYSQL_HOME}`.).

Once MySQL is installed, you only need to create an empty database for the CMS (e.g., `playbill` -- this is the value of `${DB_NAME}`).
Brightspot/Dari will take care of creating the necessary tables the first time the CMS/Tomcat is started. 

###### my.cnf
If you are using a master/slave configuration, ensure that the binglog_format in `${MYSQL_HOME}/my.cnf` is set to 'mixed' like so:

```text
binlog_format=mixed
```

##### MySQL Connector
Download the [MySQL Connector](https://dev.mysql.com/downloads/connector/j/).
Place the MySQL Connector jar file in the Tomcat lib directory.
```bash
cp mysql-connector-java-5.1.18-bin.jar ${TOMCAT_HOME}/lib
```

### Solr


Brightspot uses a standard Solr installation. 
Simply download [Solr 4.8.1](http://archive.apache.org/dist/lucene/solr/) and unzip it to a directory now referred to as `${SOLR_DIST}` (e.g., `/usr/local/solr`).

Copy `solr.war` into the Tomcat webapps directory:
```bash
cp ${SOLR_DIST}/example/webapps/solr.war ${TOMCAT_HOME}/webapps
```

Copy Solr’s DB directory into `${TOMCAT_HOME}`:
```bash
cp -r ${SOLR_DIST}/example/solr ${TOMCAT_HOME}
```

Download and replace the default Solr `schema.xml` and `solrconfig.xml` files with the [schema.xml](https://raw.github.com/perfectsense/dari/master/etc/solr/schema-12.xml) and [solrconfig.xml](https://raw.github.com/perfectsense/dari/master/etc/solr/config-5.xml) from the Dari repository.
Once downloaded, use the following command to replace the files:
```bash
cp schema-12.xml ${TOMCAT_HOME}/solr/collection1/conf/schema.xml
cp config-5.xml ${TOMCAT_HOME}/solr/collection1/conf/solrconfig.xml
```
**_Note:_** Make sure the filenames in `${TOMCAT_HOME}/solr/conf/` remain `solrconfig.xml` and `schema.xml`!

Edit the `solr.xml` file in the `${TOMCAT_HOME}/solr` folder and replace the default host port:
 ```xml
 <int name="hostPort">${jetty.port:9480}</int>
 ```

Copy all of the files in the `${SOLR_DIST}/example/lib/ext` folder into the Tomcat lib directory:
```bash
cp ${SOLR_DIST}/example/lib/ext/* ${TOMCAT_HOME}/lib
```
### Storage Item Directory (for Uploads)
Create a `media` directory on the Tomcat server where Brightspot can store uploaded files:
```bash
mkdir ${TOMCAT_HOME}/webapps/media
```



### Project Brightspot Installation
Run `mvn -version` to see your Maven Version number. If you do not have Maven, download and install. Standard maven projects can be built by running:

```
mvn clean install
```

And then copying the WAR file to your tomcat webapps directory.


### Running

In `${TOMCAT_HOME}` run
```bash
./bin/startup.sh
```
If you are seeing the following error - The BASEDIR environment variable is not defined correctly.
This environment variable is needed to run this program you will need to remove restrictions on the permissions of your `/bin/*.sh` files.

From `${TOMCAT_HOME}` run the following command:
```bash
chmod +x bin/*.sh
```
Once the code is deployed and the server up and running, you can seed the database with test content.
Create an empty directory named "temp" in the root of this project directory (as a peer of "etc" and src"), then navigate to <http://localhost:8080/_debug/> in your browser.
Under the **Standard Tools** click **uvn-bootstrap**.
Once there, click the big blue **Initialize "NAME OF PROJECT"** button, and it will kick off the data initialization process.
Once completed, you can begin navigating the site or login to the CMS to publish content.


## Environments

#### Development

##### QA

##### Staging / Prod

## Project Structure / Guidelines

#### Formatting

In an effort to reduce the number of potential merge conflicts caused by formatting, spacing, and whitespace differences in code from various developers, here are some guidelines that will help make the codebase more consistent.

* Use spaces (4 chars per indent) instead of tabs for ALL files.
* Try to remove all trailing spaces from your lines. Programs like [GitX](http://gitx.org/) will highlight these characters in a red background before you commit to make it easier to track down.
* When making formatting changes along with logic changes, do so in separate commits. This makes it easier to distinguish and track down code that actually affects the behavior of the application, versus non-impacting stylistic changes.
* For Java code, follow the [Sun recommendation](http://www.oracle.com/technetwork/java/codeconv-138413.html) as best you can unless otherwise specified.

## Frontend Information

### style-guide

[src/main/webapp/static/style-guide](src/main/webapp/static/style-guide)

#### Adding Javascript Files (JS)

#### Adding Stylesheets (LESS/CSS)

###### 3rd Party Stylesheet

###### Module/Component Stylsheet

