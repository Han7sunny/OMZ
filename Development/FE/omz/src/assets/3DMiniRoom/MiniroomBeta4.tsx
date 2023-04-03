/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 miniroomBeta4.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    writing_desk_writing_desk_0: THREE.Mesh;
    Object_8001: THREE.Mesh;
    Object_4002: THREE.Mesh;
    평면: THREE.Mesh;
    평면001: THREE.Mesh;
    큐브: THREE.Mesh;
    큐브001: THREE.Mesh;
    큐브002: THREE.Mesh;
    큐브003: THREE.Mesh;
    큐브004: THREE.Mesh;
    평면002: THREE.Mesh;
    평면003: THREE.Mesh;
    평면004: THREE.Mesh;
    구체: THREE.Mesh;
    평면005: THREE.Mesh;
    평면007: THREE.Mesh;
    평면008: THREE.Mesh;
    평면009: THREE.Mesh;
    평면010: THREE.Mesh;
    구체001: THREE.Mesh;
    구체002: THREE.Mesh;
    구체003: THREE.Mesh;
    실린더: THREE.Mesh;
    실린더001: THREE.Mesh;
    구체004: THREE.Mesh;
    평면011: THREE.Mesh;
    평면012: THREE.Mesh;
    평면006: THREE.Mesh;
    평면013: THREE.Mesh;
    평면014: THREE.Mesh;
    실린더002: THREE.Mesh;
    큐브005: THREE.Mesh;
    큐브006: THREE.Mesh;
    큐브007: THREE.Mesh;
    큐브008: THREE.Mesh;
    평면015: THREE.Mesh;
    평면016: THREE.Mesh;
    평면017: THREE.Mesh;
    평면018: THREE.Mesh;
  };
  materials: {
    Material__7: THREE.MeshStandardMaterial;
    writing_desk: THREE.MeshStandardMaterial;
    [".002"]: THREE.MeshStandardMaterial;
    [".001"]: THREE.MeshPhysicalMaterial;
    ["매테리얼.006"]: THREE.MeshStandardMaterial;
    ["매테리얼.021"]: THREE.MeshStandardMaterial;
    ["매테리얼.016"]: THREE.MeshStandardMaterial;
    ["매테리얼.020"]: THREE.MeshStandardMaterial;
    ["매테리얼.019"]: THREE.MeshStandardMaterial;
    ["매테리얼.013"]: THREE.MeshStandardMaterial;
    ["매테리얼.005"]: THREE.MeshStandardMaterial;
    ["매테리얼.003"]: THREE.MeshStandardMaterial;
    ["매테리얼.001"]: THREE.MeshStandardMaterial;
    ["매테리얼.002"]: THREE.MeshStandardMaterial;
    매테리얼: THREE.MeshStandardMaterial;
    ["매테리얼.004"]: THREE.MeshStandardMaterial;
    ["매테리얼.009"]: THREE.MeshStandardMaterial;
    ["매테리얼.010"]: THREE.MeshStandardMaterial;
    ["매테리얼.008"]: THREE.MeshStandardMaterial;
    ["매테리얼.007"]: THREE.MeshStandardMaterial;
    ["매테리얼.011"]: THREE.MeshStandardMaterial;
    ["매테리얼.012"]: THREE.MeshStandardMaterial;
    ["매테리얼.015"]: THREE.MeshStandardMaterial;
    ["매테리얼.014"]: THREE.MeshStandardMaterial;
    ["매테리얼.018"]: THREE.MeshStandardMaterial;
    ["매테리얼.029"]: THREE.MeshStandardMaterial;
    ["매테리얼.025"]: THREE.MeshStandardMaterial;
    ["매테리얼.026"]: THREE.MeshStandardMaterial;
    ["매테리얼.027"]: THREE.MeshStandardMaterial;
    ["매테리얼.028"]: THREE.MeshStandardMaterial;
    ["매테리얼.017"]: THREE.MeshStandardMaterial;
    ["매테리얼.022"]: THREE.MeshStandardMaterial;
    ["매테리얼.023"]: THREE.MeshStandardMaterial;
    ["매테리얼.024"]: THREE.MeshStandardMaterial;
  };
};

interface Item {
  [key: string]: string;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

export function MiniroomBeta4({ position, itemStatus }: Props) {
  const { nodes, materials } = useGLTF(
    "/MiniRoom/miniroomBeta4.glb"
  ) as GLTFResult;

  // 책상
  const selectTable = () => {
    switch (itemStatus?.table) {
      case "1":
        return (
          <>
            {/* 책상 1 번 시작 */}
            <mesh
              geometry={nodes.실린더002.geometry}
              material={materials["매테리얼.029"]}
              position={[-3.52, 1.92, -1.72]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.08, 0.77, 0.08]}
            />
            <mesh
              geometry={nodes.큐브005.geometry}
              material={materials["매테리얼.025"]}
              position={[-3.05, 3.09, -2.65]}
              rotation={[-3.14, -0.07, -0.29]}
              scale={[0.08, 0.29, 0.3]}
            />
            <mesh
              geometry={nodes.큐브006.geometry}
              material={materials["매테리얼.026"]}
              position={[-3.28, 3.09, -2.64]}
              rotation={[Math.PI, -0.04, 0]}
              scale={[0.08, 0.29, 0.3]}
            />
            <mesh
              geometry={nodes.큐브007.geometry}
              material={materials["매테리얼.027"]}
              position={[-3.44, 3.09, -2.63]}
              rotation={[Math.PI, -0.04, 0]}
              scale={[0.08, 0.29, 0.3]}
            />
            <mesh
              geometry={nodes.큐브008.geometry}
              material={materials["매테리얼.028"]}
              position={[-3.21, 3.14, -2.68]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.36, 0.38, 0.3]}
            />
            <mesh
              geometry={nodes.평면015.geometry}
              material={materials["매테리얼.017"]}
              position={[-3.12, 3.35, -2.65]}
              rotation={[-3.14, -0.07, 2.85]}
              scale={[0.07, 0.3, 0.26]}
            />
            <mesh
              geometry={nodes.평면016.geometry}
              material={materials["매테리얼.022"]}
              position={[-3.28, 3.36, -2.65]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.07, 0.3, 0.26]}
            />
            <mesh
              geometry={nodes.평면017.geometry}
              material={materials["매테리얼.023"]}
              position={[-3.44, 3.36, -2.64]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.07, 0.3, 0.26]}
            />
            <mesh
              geometry={nodes.평면018.geometry}
              material={materials["매테리얼.024"]}
              position={[-2.35, 2.75, -2.33]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[1.37, 0.53, 0.78]}
            />
            {/* 책상 1번 끝 */}
          </>
        );
      case "2":
        return (
          <group
            position={[-0.24, 2.52, 0.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.62}
          >
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group
                position={[0, 1.23, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  geometry={nodes.writing_desk_writing_desk_0.geometry}
                  material={materials.writing_desk}
                  position={[-3.6, 3.99, -0.04]}
                />
              </group>
            </group>
          </group>
        );
    }
  };

  const selectBed = () => {
    switch (itemStatus?.bed) {
      case "1":
        return (
          <>
            {/* 침대1 시작 */}
            <mesh
              geometry={nodes.평면002.geometry}
              material={materials["매테리얼.005"]}
              position={[2.48, 1.91, -1.2]}
              scale={[0.91, 1.48, 1.48]}
            />
            <mesh
              geometry={nodes.평면003.geometry}
              material={materials["매테리얼.003"]}
              position={[2.48, 0.94, -1.2]}
              scale={2.86}
            />
            <mesh
              geometry={nodes.평면004.geometry}
              material={materials["매테리얼.001"]}
              position={[1.5, 1.07, 0.21]}
              scale={[-0.09, -0.15, -0.09]}
            />
            <mesh
              geometry={nodes.구체.geometry}
              material={materials["매테리얼.002"]}
              position={[1.5, 2.73, 0.21]}
              scale={0.2}
            />
            <mesh
              geometry={nodes.평면005.geometry}
              material={nodes.평면005.material}
              position={[2.48, 2.11, -1.2]}
              scale={[0.91, 1.48, 1.21]}
            />
            <mesh
              geometry={nodes.평면007.geometry}
              material={materials.매테리얼}
              position={[2.48, 2.11, -1.03]}
              scale={[0.91, 1.48, 1.5]}
            />
            <mesh
              geometry={nodes.평면008.geometry}
              material={materials["매테리얼.004"]}
              position={[2.48, 2.26, -2.14]}
              scale={[0.34, 1.06, 0.21]}
            />
            {/* 침대1 끝 */}
          </>
        );
    }
  };

  const selectDesk = () => {
    switch (itemStatus?.drawer) {
      case "1":
        return (
          <>
            {/* 서랍1 시작 */}
            <mesh
              geometry={nodes.평면009.geometry}
              material={materials["매테리얼.009"]}
              position={[0.25, 1.88, -2.43]}
              scale={[0.65, 2, 0.72]}
            />
            <mesh
              geometry={nodes.평면010.geometry}
              material={materials["매테리얼.010"]}
              position={[-0.31, 1.77, -1.81]}
              scale={[0.12, 2.32, 0.13]}
            />
            <mesh
              geometry={nodes.구체001.geometry}
              material={nodes.구체001.material}
              position={[0.26, 1.73, -1.56]}
              scale={0.04}
            />
            <mesh
              geometry={nodes.구체002.geometry}
              material={nodes.구체002.material}
              position={[0.26, 1.39, -1.16]}
              scale={0.04}
            />
            <mesh
              geometry={nodes.구체003.geometry}
              material={materials["매테리얼.008"]}
              position={[0.2, 3.2, -2.47]}
              scale={0.25}
            />
            <mesh
              geometry={nodes.실린더.geometry}
              material={materials["매테리얼.007"]}
              position={[0.19, 2.73, -2.39]}
              scale={0.37}
            />

            {/* 서랍1 끝 */}
          </>
        );
    }
  };

  const selectLamp = () => {
    switch (itemStatus?.lamp) {
      case "1":
        return (
          <>
            <group
              position={[-0.3, 1.01, -1.35]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={4.7}
            >
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group scale={0.14}>
                  <mesh
                    geometry={nodes.Object_4002.geometry}
                    material={materials[".001"]}
                    position={[2.52, 0.17, -1.14]}
                    scale={0.5}
                  />
                  <mesh
                    geometry={nodes.Object_8001.geometry}
                    material={materials[".002"]}
                    position={[2.52, 0.17, -1.14]}
                    scale={0.5}
                  />
                </group>
              </group>
            </group>
          </>
        );
    }
  };

  const selectSofa = () => {
    switch (itemStatus?.sofa) {
      case "1":
        return (
          <>
            <group
              position={[2.59, 1.03, 2.67]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.04}
            >
              <group position={[-44.67, -17.64, 0]}>
                <mesh
                  geometry={nodes.Object_3.geometry}
                  material={materials.Material__7}
                />
                <mesh
                  geometry={nodes.Object_4.geometry}
                  material={materials.Material__7}
                />
                <mesh
                  geometry={nodes.Object_5.geometry}
                  material={materials.Material__7}
                />
                <mesh
                  geometry={nodes.Object_6.geometry}
                  material={materials.Material__7}
                />
              </group>
            </group>
          </>
        );
    }
  };
  // 프롭스 추가
  const props: any = { position };
  return (
    <group {...props} dispose={null}>
      {/* 소파1 시작 */}
      <group
        position={[2.59, 1.03, 2.67]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.04}
      >
        <group position={[-44.67, -17.64, 0]}></group>
      </group>
      {/* 소파1 끝 */}
      {/* 조명1 시작 */}
      <group
        position={[-0.3, 1.01, -1.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={4.7}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.14}></group>
        </group>
      </group>
      {/* 조명1 끝 */}
      <mesh
        geometry={nodes.평면.geometry}
        material={nodes.평면.material}
        position={[0.06, 0.87, 0.41]}
        scale={4.21}
      />
      <mesh
        geometry={nodes.평면001.geometry}
        material={materials["매테리얼.006"]}
        position={[2.33, 0.92, 0.41]}
        scale={[6.48, 4.21, 4.21]}
      />
      <mesh
        geometry={nodes.큐브.geometry}
        material={materials["매테리얼.021"]}
        position={[0.06, 0.87, 0.41]}
        scale={4.21}
      />
      <mesh
        geometry={nodes.큐브001.geometry}
        material={materials["매테리얼.016"]}
        position={[1.92, 2.69, -0.25]}
        scale={[2.39, 1.32, 0.55]}
      />
      <mesh
        geometry={nodes.큐브002.geometry}
        material={materials["매테리얼.020"]}
        position={[1.92, 3.67, 0.8]}
        scale={[2.39, 0.62, 0.35]}
      />
      <mesh
        geometry={nodes.큐브003.geometry}
        material={materials["매테리얼.019"]}
        position={[1.92, 2.86, 0.8]}
        scale={[2.39, 0.62, 0.35]}
      />
      <mesh
        geometry={nodes.큐브004.geometry}
        material={materials["매테리얼.013"]}
        position={[0.06, 0.87, 0.41]}
        scale={4.21}
      />
      <mesh
        geometry={nodes.실린더001.geometry}
        material={materials["매테리얼.011"]}
        position={[-0.33, 5.58, -3.24]}
        scale={0.2}
      >
        <mesh
          geometry={nodes.구체004.geometry}
          material={materials["매테리얼.012"]}
          position={[0, 1.62, 0]}
          scale={[1.26, 2.18, 1.26]}
        />
      </mesh>
      <mesh
        geometry={nodes.평면011.geometry}
        material={materials["매테리얼.015"]}
        position={[-1.78, 5.4, -3.31]}
        rotation={[0, -0.41, 0]}
        scale={[0.25, 0.33, 0.33]}
      />
      <mesh
        geometry={nodes.평면012.geometry}
        material={materials["매테리얼.014"]}
        position={[-1.78, 5.49, -3.31]}
        rotation={[0, -0.01, 0]}
        scale={[0.25, 0.33, 0.33]}
      />
      {/* 창문 */}
      <mesh
        geometry={nodes.평면006.geometry}
        material={materials["매테리얼.018"]}
        position={[4.21, 3.74, -0.25]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.58, 0.49, 0.53]}
      />
      <mesh
        geometry={nodes.평면013.geometry}
        material={materials["매테리얼.018"]}
        position={[4.21, 4.14, 0.8]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.3, 0.3, 0.32]}
      />
      <mesh
        geometry={nodes.평면014.geometry}
        material={materials["매테리얼.018"]}
        position={[4.21, 3.36, 0.8]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.3, 0.3, 0.32]}
      />
      {/* 함수 써주기 */}
      {selectTable()}
      {selectDesk()}
      {selectBed()}
      {selectSofa()}
      {selectLamp()}
    </group>
  );
}

useGLTF.preload("/MiniRoom/miniroomBeta4.glb");
