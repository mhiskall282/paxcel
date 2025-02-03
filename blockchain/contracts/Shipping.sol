// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PaxcelShipping {
    enum ShippingType { Air, Sea, Road }
    enum Status { Created, InTransit, Delayed, Delivered }
    
    struct Location {
        string name;
        string coordinates;
        uint256 timestamp;
    }

    struct Shipment {
        // Sender Details
        string senderName;
        string senderAddress;
        
        // Receiver Details
        string receiverName;
        string receiverAddress;
        
        // Package Details
        uint256 weight;
        ShippingType shippingType;
        string additionalNotes;
        
        // Tracking
        string trackingNumber;
        Location[] locations;
        Status status;
        uint256 estimatedDelivery;
        uint256 shippingCost;
    }

    mapping(string => Shipment) public shipments;
    mapping(address => string[]) public userShipments;
    
    // Price per kg for each shipping type
    uint256 public airRate = 0.1 ether;
    uint256 public seaRate = 0.05 ether;
    uint256 public roadRate = 0.03 ether;

    event ShipmentCreated(string trackingNumber, address indexed creator);
    event StatusUpdated(string trackingNumber, Status newStatus);
    event LocationAdded(string trackingNumber, Location location);

    // Calculate shipping cost
    function calculateCost(uint256 weight, ShippingType shippingType) public view returns (uint256) {
        if(shippingType == ShippingType.Air) return weight * airRate;
        if(shippingType == ShippingType.Sea) return weight * seaRate;
        return weight * roadRate;
    }

    // Create new shipment with AA compatibility
    function createShipment(
        string memory _trackingNumber,
        string memory _senderName,
        string memory _senderAddress,
        string memory _receiverName,
        string memory _receiverAddress,
        uint256 _weight,
        ShippingType _shippingType,
        string memory _additionalNotes
    ) external payable {
        require(msg.value == calculateCost(_weight, _shippingType), "Incorrect payment");
        
        Shipment storage newShipment = shipments[_trackingNumber];
        newShipment.senderName = _senderName;
        newShipment.senderAddress = _senderAddress;
        newShipment.receiverName = _receiverName;
        newShipment.receiverAddress = _receiverAddress;
        newShipment.weight = _weight;
        newShipment.shippingType = _shippingType;
        newShipment.additionalNotes = _additionalNotes;
        newShipment.trackingNumber = _trackingNumber;
        newShipment.status = Status.Created;
        
        userShipments[msg.sender].push(_trackingNumber);
        
        emit ShipmentCreated(_trackingNumber, msg.sender);
    }

    // Add location update
    function addLocationUpdate(
        string memory _trackingNumber,
        string memory _name,
        string memory _coordinates
    ) external {
        shipments[_trackingNumber].locations.push(Location({
            name: _name,
            coordinates: _coordinates,
            timestamp: block.timestamp
        }));
        emit LocationAdded(_trackingNumber, shipments[_trackingNumber].locations[shipments[_trackingNumber].locations.length - 1]);
    }

    // Update shipment status
    function updateStatus(string memory _trackingNumber, Status _newStatus) external {
        shipments[_trackingNumber].status = _newStatus;
        emit StatusUpdated(_trackingNumber, _newStatus);
    }

    // Get shipment details
    function getShipment(string memory _trackingNumber) external view returns (Shipment memory) {
        return shipments[_trackingNumber];
    }
}