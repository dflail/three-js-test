import React, { useEffect } from 'react';
import * as THREE from 'three';
import './App.css';

const CUBE_DIM = 3.25;

const App = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize, false);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(CUBE_DIM, CUBE_DIM, CUBE_DIM);
    const material = new THREE.MeshBasicMaterial({
      color: 0x1e1e2f,
      wireframe: false,
      transparent: true,
      opacity: 0.25
    });

    const cube1 = new THREE.Mesh(geometry, material);
    const cube2 = new THREE.Mesh(geometry, material);
    const cube3 = new THREE.Mesh(geometry, material);
    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);
    camera.position.z = 5;

    const wfGeo = new THREE.EdgesGeometry(cube1.geometry);
    const wfMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2
    });
    const wireframe1 = new THREE.LineSegments(wfGeo, wfMat);
    const wireframe2 = new THREE.LineSegments(wfGeo, wfMat);
    const wireframe3 = new THREE.LineSegments(wfGeo, wfMat);
    cube1.add(wireframe1);
    cube2.add(wireframe2);
    cube3.add(wireframe3);

    const animate = () => {
      requestAnimationFrame(animate);
      cube1.rotation.z -= 0.01;
      cube2.rotation.x += 0.01;
      cube3.rotation.y -= 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div>READY</div>;
};

export default App;
