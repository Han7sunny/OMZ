/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 custom_bear.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    alien_glasses: THREE.Mesh;
    angel_hat: THREE.Mesh;
    angel_wing: THREE.Mesh;
    arab_object: THREE.Mesh;
    arab_object_1: THREE.Mesh;
    balloon_object: THREE.Mesh;
    balloon_object_1: THREE.Mesh;
    bat_object: THREE.Mesh;
    bat_object_1: THREE.Mesh;
    circle_glasses: THREE.Mesh;
    heart_glasses: THREE.Mesh;
    magic_object: THREE.Mesh;
    magic_object_1: THREE.Mesh;
    santa_object: THREE.Mesh;
    santa_object_1: THREE.Mesh;
    star_glasses: THREE.Mesh;
    vampire_object: THREE.Mesh;
    vampire_object_1: THREE.Mesh;
    honey: THREE.Mesh;
    my_glasses: THREE.Mesh;
    white_cap: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    alien_material: THREE.MeshStandardMaterial;
    angel_hat_material: THREE.MeshStandardMaterial;
    angel_wing_material: THREE.MeshStandardMaterial;
    arab_material_1: THREE.MeshStandardMaterial;
    arab_material_2: THREE.MeshStandardMaterial;
    balloon_material_1: THREE.MeshStandardMaterial;
    balloon_material_2: THREE.MeshStandardMaterial;
    bat_object_1: THREE.MeshStandardMaterial;
    bat_object_2: THREE.MeshStandardMaterial;
    circle_glasses_material: THREE.MeshStandardMaterial;
    heart_glasses_material: THREE.MeshStandardMaterial;
    magic_material_1: THREE.MeshStandardMaterial;
    magic_material_2: THREE.MeshStandardMaterial;
    santa_material_1: THREE.MeshStandardMaterial;
    santa_materail_2: THREE.MeshStandardMaterial;
    star_material: THREE.MeshStandardMaterial;
    vampire_material1: THREE.MeshStandardMaterial;
    vampire_material2: THREE.MeshStandardMaterial;
    honey_material: THREE.MeshBasicMaterial;
    mymaterial: THREE.MeshStandardMaterial;
    white_material: THREE.MeshStandardMaterial;
  };
};
interface Item {
  [key: string]: number;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

export function Custom_bear({ position, itemStatus }: Props) {
  const { nodes, materials } = useGLTF("/3D/custom_bear.glb") as GLTFResult;

  // 안경 custom
  const selectGlasses = () => {
    switch (itemStatus?.glasses) {
      case 1:
        // 하트 안경
        return (
          <>
            <mesh
              geometry={nodes.heart_glasses.geometry}
              material={materials.heart_glasses_material}
              position={[-0.69, 3.04, 0.78]}
              rotation={[0.28, -0.72, 0.17]}
              scale={0.33}
            />
          </>
        );
      case 2:
        // 별 안경
        return (
          <>
            <mesh
              geometry={nodes.star_glasses.geometry}
              material={materials.star_material}
              position={[-0.6, 2.94, 0.65]}
              rotation={[3.11, -0.84, -3.13]}
              scale={0.29}
            />
          </>
        );
      case 3:
        // alien 안경
        return (
          <>
            <mesh
              geometry={nodes.alien_glasses.geometry}
              material={materials.alien_material}
              position={[-0.41, 3.03, 0.49]}
              rotation={[-3.12, -0.72, -3.04]}
              scale={0.42}
            />
          </>
        );
      case 4:
        // 동그란 안경
        return (
          <>
            <mesh
              geometry={nodes.circle_glasses.geometry}
              material={materials.circle_glasses_material}
              position={[-0.6, 2.91, 0.68]}
              rotation={[-3.11, -0.82, -3.06]}
              scale={0.3}
            />
          </>
        );
      case 5:
        // 내 안경
        return (
          <>
            <mesh
              geometry={nodes.my_glasses.geometry}
              material={materials.mymaterial}
              position={[-0.44, 2.9, 0.49]}
              rotation={[-3.13, -0.77, -3.12]}
              scale={0.39}
            />
          </>
        );
    }
  };
  // 모자 custom
  const selectHat = () => {
    switch (itemStatus?.hat) {
      case 1:
        // 천사 링
        return (
          <>
            <mesh
              geometry={nodes.angel_hat.geometry}
              material={materials.angel_hat_material}
              position={[-0.22, 4.01, 0.77]}
              rotation={[-1.59, -0.01, 0.47]}
              scale={0.36}
            />
          </>
        );
      case 2:
        // 아랍 모자
        return (
          <>
            <group
              position={[0.2, 1.59, -0.11]}
              rotation={[0.01, -0.66, -0.01]}
              scale={[2.65, 2.43, 2.56]}
            >
              <mesh
                geometry={nodes.arab_object.geometry}
                material={materials.arab_material_1}
              />
              <mesh
                geometry={nodes.arab_object_1.geometry}
                material={materials.arab_material_2}
              />
            </group>
          </>
        );
      case 3:
        // 마법 모자
        return (
          <>
            <group
              position={[0.1, 3.72, -0.11]}
              rotation={[2.92, 0.98, -2.98]}
              scale={[1.11, 0.5, 1.03]}
            >
              <mesh
                geometry={nodes.magic_object.geometry}
                material={materials.magic_material_1}
              />
              <mesh
                geometry={nodes.magic_object_1.geometry}
                material={materials.magic_material_2}
              />
            </group>
          </>
        );
      case 4:
        // 산타 모자
        return (
          <>
            <group
              position={[0.04, 3.37, -0.02]}
              rotation={[-1.58, 0.01, -2.43]}
              scale={[1.05, 1.06, 1.05]}
            >
              <mesh
                geometry={nodes.santa_object.geometry}
                material={materials.santa_material_1}
              />
              <mesh
                geometry={nodes.santa_object_1.geometry}
                material={materials.santa_materail_2}
              />
            </group>
          </>
        );
      case 5:
        // 마우스 모자
        return (
          <>
            <mesh
              geometry={nodes.white_cap.geometry}
              material={materials.white_material}
              position={[0.08, 3.41, -0.07]}
              rotation={[-1.74, 0.2, -0.76]}
              scale={1.11}
            />
          </>
        );
    }
  };
  // 날개 custom
  const selectWing = () => {
    switch (itemStatus?.wing) {
      case 1:
        // 천사 날개
        return (
          <>
            <mesh
              geometry={nodes.angel_wing.geometry}
              material={materials.angel_wing_material}
              position={[-0.28, 1.6, -0.86]}
              rotation={[2.97, 0.71, -3.01]}
              scale={0.17}
            />
          </>
        );
      case 2:
        // 박쥐 날개
        return (
          <>
            <group
              position={[0.48, 1.22, -0.43]}
              rotation={[-1.38, -0.22, -0.8]}
              scale={0.44}
            >
              <mesh
                geometry={nodes.bat_object.geometry}
                material={materials.bat_object_1}
              />
              <mesh
                geometry={nodes.bat_object_1.geometry}
                material={materials.bat_object_2}
              />
            </group>
          </>
        );
      case 3:
        // 풍선
        return (
          <>
            <group
              position={[-0.79, 1.62, 0.79]}
              rotation={[0.23, -0.02, -0.15]}
              scale={-0.06}
            >
              <mesh
                geometry={nodes.balloon_object.geometry}
                material={materials.balloon_material_1}
              />
              <mesh
                geometry={nodes.balloon_object_1.geometry}
                material={materials.balloon_material_2}
              />
            </group>
          </>
        );
      case 4:
        // 뱀파이어 망토
        return (
          <>
            <group
              position={[0.09, 2.52, -0.09]}
              rotation={[0, -0.8, 0]}
              scale={1.5}
            >
              <mesh
                geometry={nodes.vampire_object.geometry}
                material={materials.vampire_material1}
              />
              <mesh
                geometry={nodes.vampire_object_1.geometry}
                material={materials.vampire_material2}
              />
            </group>
          </>
        );
      case 5:
        // 랜덤(꿀 아이스크림)
        return (
          <>
            <mesh
              geometry={nodes.honey.geometry}
              material={materials.honey_material}
              position={[0.66, 2, 1.28]}
              rotation={[-0.92, 0.02, -0.97]}
              scale={0.97}
            />
          </>
        );
    }
  };
  const props: any = { position };
  return (
    <group {...props} dispose={null}>
      {selectGlasses()}
      {selectHat()}
      {selectWing()}
      <group
        position={[0, 3, 0.01]}
        rotation={[0, -0.75, 0]}
        scale={[1.14, 1, 1.14]}
      >
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Mesh_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Mesh_3.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D/custom_bear.glb");
