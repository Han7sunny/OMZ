/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 myroom.glb -t
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
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
  };
  materials: {
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
  };
};

export function MiniRoom(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/MiniRoom/myroom.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
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
    </group>
  );
}

useGLTF.preload("/MiniRoom/myroom.glb");
