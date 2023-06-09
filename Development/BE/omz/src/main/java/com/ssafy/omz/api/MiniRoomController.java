package com.ssafy.omz.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.omz.dto.req.*;
import com.ssafy.omz.dto.resp.BgmResponseDto;
import com.ssafy.omz.dto.resp.MemberResponseDto;
import com.ssafy.omz.entity.MiniRoomLikes;
import com.ssafy.omz.service.MiniRoomLikesService;
import com.ssafy.omz.service.MiniRoomService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.crypto.interfaces.PBEKey;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Api("miniRoomController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/miniroom")
public class MiniRoomController {

    private final MiniRoomService miniRoomService;
    private final MiniRoomLikesService miniRoomLikesService;



    @ApiOperation(value = "미니룸 3D 불러오기")
    @GetMapping("/3d")
    public ResponseEntity<?> getMiniRoom(@RequestParam(required = true, value = "memberId") long memberId){
        try{
            return new ResponseEntity<>(miniRoomService.getMiniRoom(memberId), HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "미니룸 커스텀하기")
    @PutMapping("/3d/{memberId}")
    public ResponseEntity<?> getMiniRoom(@PathVariable long memberId, @RequestBody List<ItemRequestDto.Write> customInfo){
        try{
            miniRoomService.updateMiniRoomCustom(memberId, customInfo);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @ApiOperation(value = "상태 메세지 조회")
    @GetMapping("")
    public ResponseEntity<?> stateMessageInfo(@RequestParam(required = true, value="memberId") long memberId){
        try{
            return new ResponseEntity<>(miniRoomService.getStateMessage(memberId), HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "상태메세지 수정")
    @PutMapping("")
    public ResponseEntity<?> stateMessageUpdate(@RequestParam(required = true) long memberId,
                                                @RequestParam String stateMessage){
        try{
            miniRoomService.updateStateMessage(memberId, stateMessage);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "상태메세지 삭제 (기본 상메로 변경)")
    @PutMapping("/")
    public ResponseEntity<?> stateMessageUpdate(@RequestParam(required = true) long memberId){
        try{
            miniRoomService.deleteStateMessage(memberId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @ApiOperation(value = "좋아요 수 조회")
    @GetMapping("/like")
    public ResponseEntity<?> getLikesMiniRoom(@RequestParam(required = true) long friendId, @RequestParam(required = true) long myId){
        Map<String,Object> result = new HashMap<String, Object>();
        try{
            long likesNum = miniRoomLikesService.getLikes(friendId);
            boolean isLiked = miniRoomLikesService.isAlreadyLiked(friendId, myId);
            result.put("likes",likesNum);
            result.put("isLiked", isLiked);
            return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "미니룸 좋아요 & 좋아요 취소")
    @PutMapping("/like")
    public ResponseEntity<?> likeMiniRoom(@RequestParam(required = true) long friendId, @RequestParam(required = true) long myId, @RequestParam(required = true) boolean isLiked){
        try{
            miniRoomLikesService.likeMiniRoom(friendId, myId, isLiked);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "미니룸 배경음악 조회", notes = "미니룸 아이디 받아 조회")
    @GetMapping(value = "/music")
    public ResponseEntity<?> updateMusicInfo(@RequestParam(required = true) long memberId) {
        try{
            BgmResponseDto.BgmInfo bgmInfo = miniRoomService.getBgm(memberId);
            return new ResponseEntity<>(bgmInfo, HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "미니룸 배경음악 등록", notes = "제목, 가수를 받아 저장")
    @PostMapping(value = "/music")
    public ResponseEntity<?> updateMusicInfo(@RequestParam(required = true) long memberId, @RequestBody BgmRequestDto.Write musicInfo) {
        try{
            miniRoomService.updateBgm(memberId, musicInfo);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}