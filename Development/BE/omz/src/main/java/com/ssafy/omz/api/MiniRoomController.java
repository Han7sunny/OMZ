package com.ssafy.omz.api;

import com.ssafy.omz.dto.req.MiniRoomRequestDto;
import com.ssafy.omz.entity.MiniRoomLikes;
import com.ssafy.omz.service.MiniRoomLikesService;
import com.ssafy.omz.service.MiniRoomService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api("miniRoomController API v1")
@RestController
@RequiredArgsConstructor
@RequestMapping("/miniroom")
public class MiniRoomController {

    private final MiniRoomService miniRoomService;
    private final MiniRoomLikesService miniRoomLikesService;



//    @ApiOperation(value = "미니룸 3D 불러오기")
//    @GetMapping("/3d")
//    public ResponseEntity<?> getMiniRoom(@RequestParam(required = true, value = "memberId") long memberId){
//        try{
//            return new ResponseEntity<>(miniRoomService.getMiniRoom(memberId), HttpStatus.ACCEPTED);
//        } catch (Exception e){
//            e.printStackTrace();
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }


    @ApiOperation(value = "상태 메세지 조회")
    @GetMapping("")
    public ResponseEntity<?> stateMessageInfo(@RequestParam(required = true, value="miniRoomId") long miniRoomId){
        try{
            return new ResponseEntity<>(miniRoomService.getStateMessage(miniRoomId), HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "상태메세지 수정")
    @PutMapping("")
    public ResponseEntity<?> stateMessageUpdate(@RequestParam(required = true) long miniRoomId,
                                                @RequestParam String stateMessage){
        try{
            miniRoomService.updateStateMessage(miniRoomId, stateMessage);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "상태메세지 삭제 (기본 상메로 변경)")
    @PutMapping("/")
    public ResponseEntity<?> stateMessageUpdate(@RequestParam(required = true) long miniRoomId){
        try{
            miniRoomService.deleteStateMessage(miniRoomId);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @ApiOperation(value = "좋아요 수 조회")
    @GetMapping("/like")
    public ResponseEntity<?> getLikesMiniRoom(@RequestParam(required = true) long miniRoomId){
        try{
            long likesNum = miniRoomLikesService.getLikes(miniRoomId);
            return new ResponseEntity<>(likesNum, HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "미니룸 좋아요 & 좋아요 취소")
    @PutMapping("/like")
    public ResponseEntity<?> likeMiniRoom(@RequestParam(required = true) long miniRoomId, @RequestParam(required = true) long memberId){
        try{
            return new ResponseEntity<>(miniRoomService.getStateMessage(miniRoomId), HttpStatus.ACCEPTED);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    
}