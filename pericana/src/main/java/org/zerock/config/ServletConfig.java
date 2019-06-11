package org.zerock.config;

import java.util.List;
import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@EnableWebMvc
@ComponentScan(basePackages = { "org.zerock.controller", "com.coderby.myapp.hr.controller" })
public class ServletConfig implements WebMvcConfigurer {

	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		InternalResourceViewResolver bean = new InternalResourceViewResolver();
		bean.setViewClass(JstlView.class);
		bean.setPrefix("/WEB-INF/views/");
		bean.setSuffix(".jsp");
		registry.viewResolver(bean);
	}

	@Override
	public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> exceptionResolvers) {
		SimpleMappingExceptionResolver smer = new SimpleMappingExceptionResolver();
		smer.setDefaultErrorView("error/runtime");
		Properties mappings = new Properties();
		mappings.setProperty("java.lang.RuntimeException", "error/runtime");
//		mappings.setProperty("org.springframework.dao.DataAccessException", "cmmn/dataAccessFailure");
//		mappings.setProperty("org.springframework.transaction.TransactionException", "cmmn/transactionFailure");
//		mappings.setProperty("egovframework.rte.fdl.cmmn.exception.EgovBizException", "cmmn/egovError");
//		mappings.setProperty("org.springframework.security.AccessDeniedException", "cmmn/egovError");
		smer.setExceptionMappings(mappings);
		exceptionResolvers.add(smer);
	}

	@Bean
	public MultipartResolver multipartResolver() {
		StandardServletMultipartResolver resolver = new StandardServletMultipartResolver();
		return resolver;
	}

//	@Bean(name = "commonsMultipartResolver")
//	public CommonsMultipartResolver getResolver() throws IOException {
//		CommonsMultipartResolver resolver = new CommonsMultipartResolver();
//		// 10MB
//		resolver.setMaxUploadSize(1024 * 1024 * 10);
//		// 2MB
//		resolver.setMaxUploadSizePerFile(1024 * 1024 * 2);
//		// 1MB
//		resolver.setMaxInMemorySize(1024 * 1024);
//		// temp upload
//		resolver.setUploadTempDir(new FileSystemResource("C:\\upload\\tmp"));
//		resolver.setDefaultEncoding("UTF-8");
//		return resolver;
//	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
		registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
		registry.addResourceHandler("/resources/images/**").addResourceLocations("/WEB-INF/resources/images/");
		registry.addResourceHandler("/resources/js/**").addResourceLocations("/WEB-INF/resources/js/");
		registry.addResourceHandler("/resources/fonts/**").addResourceLocations("/WEB-INF/resources/fonts/");
		registry.addResourceHandler("/resources/scss/**").addResourceLocations("/WEB-INF/resources/scss/");
		registry.addResourceHandler("/resources/css/**").addResourceLocations("/WEB-INF/resources/css/");
	}

//	@Override
//	public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
//		// Restful 한 서비스에서 APPLICATION_JSON_VALUE로 지정하여도 충분하나
//		// IE9에서 JSON을 iframe transport로 전송 시 파일로 저장하려는 버그 발생으로 인해 아래와 같이 선언.
//		MediaType API_PRODUCES_MEDIATYPE = MediaType.valueOf(MediaType.TEXT_HTML_VALUE + ";charset=utf-8");
//		configurer.ignoreAcceptHeader(false) // HttpRequest Header의 Accept 무시 여부
//				.favorPathExtension(true) // 프로퍼티 값을 보고 URL의 확장자에서 리턴 포맷을 결정 여부
//				.ignoreUnknownPathExtensions(true) // 모든 미디어 유형으로 해결할 수없는 경로 확장자를 가진 요청을 무시할지 여부
//				.favorParameter(true) // URL 호출 시 특정 파라미터로 리턴포맷 전달 허용 여부 ex)a.do?format=json
//				.mediaType("json", MediaType.APPLICATION_JSON_UTF8) // UTF-8 기반 JSON 타입 선언
//				.defaultContentType(API_PRODUCES_MEDIATYPE);
//	}

	/**
	 * https://www.programcreek.com/java-api-examples/index.php?api=org.springframework.http.converter.StringHttpMessageConverter
	 * https://victorydntmd.tistory.com/172
	 */
//	@Override
//	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
//		// 모든 미디어 타입(*/*)을 String으로 읽는다. text/plain에 대한 String을 쓴다.
//		StringHttpMessageConverter stringHttpMessageConverter = new StringHttpMessageConverter(Charset.forName("UTF-8"));
//		List<MediaType> stringMediaTypeList = new ArrayList<>();
//		stringMediaTypeList.add(MediaType.valueOf(MediaType.TEXT_HTML_VALUE + ";charset=utf-8"));
//		stringHttpMessageConverter.setSupportedMediaTypes(stringMediaTypeList);
//		stringHttpMessageConverter.setWriteAcceptCharset(true);
//		converters.add(stringHttpMessageConverter);
//
//		List<MediaType> jsongMediaTypeList = new ArrayList<>();
//		jsongMediaTypeList.add(MediaType.APPLICATION_JSON_UTF8);
//		MappingJackson2HttpMessageConverter mappingJackson2HttpMessgeConverter = new MappingJackson2HttpMessageConverter();
//		mappingJackson2HttpMessgeConverter.setSupportedMediaTypes(jsongMediaTypeList);
//		converters.add(mappingJackson2HttpMessgeConverter);
//	}
}
