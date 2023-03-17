package com.ssafy.omz.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.omz.dto.TokenDto;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
@Service
public interface MemberService{
    // 카카오 유저 정보 확인 후 token 발급
    TokenDto kakaoLogin(String token) throws JsonProcessingException;

    // DB에서 refresh token 확인
    boolean refreshCheck(String token);

    // refresh code에 해당하는 유저 email 반환
    String memberEmail(String token);
}
