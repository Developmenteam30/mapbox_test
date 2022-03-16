//
//  FreerideManager.swift
//  mapbox_test
//
//  Created by APPLE on 10/03/22.
//
import UIKit
//import react_native_mapbox_navigation
@objc(FreerideManager)

class FreeDriveManager: RCTViewManager {
  override func view() -> UIView! {
    let view = FreeDriveView()
    view.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    return view.view
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
